package fundrtest

import (
	"bytes"
	"encoding/json"
	"fmt"
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
		"Username": "testuser@gmail.com",
		"Password": "test1"
	}`)

	var signup_json = []byte(`{
		"Name":"Yo1",
		"Username": "testuser@gmail.com",
		"Password": "test1",
		"Mobile": "999999999",
		"UserType": "Founder"
	}`)

	var userdata_json = []byte(`{
		"name":"Yo1",
		"address": "221B baker street, hogwarts",
		"education": "10th Fail"
	}`)

	var testuser model.User_description

	resp := type_resp{}
	w_signup := httptest.NewRecorder()
	w_signin := httptest.NewRecorder()
	w_userdata := httptest.NewRecorder()

	req_signin, _ := http.NewRequest("POST", "/api/signin", bytes.NewBuffer(signin_json))
	req_signup, _ := http.NewRequest("POST", "/api/signup", bytes.NewBuffer(signup_json))
	req_postuser, _ := http.NewRequest("POST", "/api/auth/postuserdata", bytes.NewBuffer(userdata_json))

	router := server.SetRouter()

	model.DB_init()
	model.DB.DB.First(&testuser, "Username = ?", "testuser@gmail.com")
	if testuser.Username == "" {
		router.ServeHTTP(w_signup, req_signup)
	}

	router.ServeHTTP(w_signin, req_signin)
	fmt.Println(w_signin.Result().Cookies())
	cookie_val := w_signin.Result().Cookies()[0].Value
	req_postuser.AddCookie(&http.Cookie{Name: "mysession", Value: cookie_val})
	router.ServeHTTP(w_userdata, req_postuser)

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
	assert.Equal(t, "User updated successfully.", resp.Message)
}
