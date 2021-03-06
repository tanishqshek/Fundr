package fundrtest

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/tanishqshek/Fundr/backend/model"
	"github.com/tanishqshek/Fundr/backend/server"
)

func TestGetPitch(t *testing.T) {

	var signUpJson = []byte(`{
		"name": "Investor",
		"username": "investor@gmail.com",
		"password": "pass123",
		"mobile": "99897838268",
		"usertype": "Investor"
	}`)

	var signInJson = []byte(`{
		"username": "investor@gmail.com",
		"password": "pass123"
	}`)

	var postTagsJson = []byte(`{
		"Tags":"Automotice,Financial"
	}`)

	var testuser model.User_description

	resp := type_resp{}
	wSignUp := httptest.NewRecorder()
	wSignIn := httptest.NewRecorder()
	wPostTags := httptest.NewRecorder()
	wgetPitch := httptest.NewRecorder()

	signUpReq, _ := http.NewRequest("POST", "/api/signup", bytes.NewBuffer(signUpJson))
	signInReq, _ := http.NewRequest("POST", "/api/signin", bytes.NewBuffer(signInJson))
	postTagsReq, _ := http.NewRequest("POST", "/api/auth/posttags", bytes.NewBuffer(postTagsJson))
	getPitchReq, _ := http.NewRequest("GET", "/api/auth/getpitch", nil)

	router := server.SetRouter()

	model.DB_init()
	model.DB.DB.First(&testuser, "Username = ?", "investor@gmail.com")
	if testuser.Username == "" {
		router.ServeHTTP(wSignUp, signUpReq)
	}

	router.ServeHTTP(wSignIn, signInReq)
	cookie_val := wSignIn.Result().Cookies()[0].Value
	getPitchReq.AddCookie(&http.Cookie{Name: "mysession", Value: cookie_val})
	router.ServeHTTP(wgetPitch, getPitchReq)

	err := json.Unmarshal(wSignUp.Body.Bytes(), &resp)
	if err != nil {
		// log.Println("1", err.Error())
	}

	err = json.Unmarshal(wSignIn.Body.Bytes(), &resp)
	if err != nil {
		// log.Println(err.Error())
	}

	router.ServeHTTP(wPostTags, postTagsReq)
	err = json.Unmarshal(wPostTags.Body.Bytes(), &resp)
	if err != nil {
		// log.Println(err.Error())
	}

	err = json.Unmarshal(wgetPitch.Body.Bytes(), &resp)
	if err != nil {
		// log.Println(err.Error())
	}

	// log.Println(resp)

	assert.Equal(t, 200, wgetPitch.Code)
	// assert.Equal(t, "Match Succesful", resp.Message)
}
