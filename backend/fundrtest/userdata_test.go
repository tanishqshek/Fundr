package fundrtest

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/tanishqshek/Fundr/backend/model"
	"github.com/tanishqshek/Fundr/backend/server"
)

func TestUserdata(t *testing.T) {

	var signin_json = []byte(`{
		"Username": "sumeet2807e@gmail.com",
		"Password": "tan1"
	}`)

	var signup_json = []byte(`{
		"Name":"Yo1",
		"Username": "sumeet2807e@gmail.com",
		"Password": "tan1",
		"Mobile": "999999999",
		"UserType": "Founder"
	}`)

	var userdata_json = []byte(`{
		"name":"Yo1",
		"address": "sumeet2807e@gmail.com",
		"education": "10th Fail"
	}`)

	resp := type_resp{}
	w_signup := httptest.NewRecorder()
	w_signin := httptest.NewRecorder()
	w_userdata := httptest.NewRecorder()

	req_signin, _ := http.NewRequest("POST", "/api/signin", bytes.NewBuffer(signin_json))
	req_signup, _ := http.NewRequest("POST", "/api/signup", bytes.NewBuffer(signup_json))
	req_postuser, _ := http.NewRequest("POST", "/api/auth/postuserdata", bytes.NewBuffer(userdata_json))

	router := server.SetRouter()

	model.DB_init()
	router.ServeHTTP(w_signup, req_signup)
	router.ServeHTTP(w_signin, req_signin)
	router.ServeHTTP(w_signin, req_postuser)

	err := json.Unmarshal(w_signup.Body.Bytes(), &resp)
	if err != nil {
		log.Println(err.Error())
	}

	err = json.Unmarshal(w_signin.Body.Bytes(), &resp)
	if err != nil {
		log.Println(err.Error())
	}

	err = json.Unmarshal(w_userdata.Body.Bytes(), &resp)
	if err != nil {
		log.Println(err.Error())
	}

	log.Println(resp)

	assert.Equal(t, 200, w_signin.Code)
	assert.Equal(t, "Signed in successfully.", resp.Message)
}
