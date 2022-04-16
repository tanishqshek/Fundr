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

type swipe_request struct {
	Action  string
	Target  string
	PitchId string
}

type swipe_response struct {
	Message string
	Status  string
}

func TestSwipe(t *testing.T) {

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

	var swipeJson = []byte(`{
		"action":"right",
		"target":"285da091-c54d-418c-a510-f75402251e2b",
		"pitch_id": "4c9eb48e-1895-4e60-b40a-8d7d435dc746"
	}`)

	resp := type_resp{}
	wSignUp := httptest.NewRecorder()
	wSignIn := httptest.NewRecorder()
	wSwipe := httptest.NewRecorder()

	signUpReq, _ := http.NewRequest("POST", "/api/signup", bytes.NewBuffer(signUpJson))
	signInReq, _ := http.NewRequest("POST", "/api/signin", bytes.NewBuffer(signInJson))
	swipeReq, _ := http.NewRequest("POST", "/api/auth/swipe", bytes.NewBuffer(swipeJson))

	router := server.SetRouter()

	model.DB_init()
	router.ServeHTTP(wSignUp, signUpReq)
	router.ServeHTTP(wSignIn, signInReq)
	router.ServeHTTP(wSwipe, swipeReq)

	err := json.Unmarshal(wSignUp.Body.Bytes(), &resp)
	if err != nil {
		log.Println("1", err.Error())
	}

	log.Println("1 resp", resp)

	err = json.Unmarshal(wSignIn.Body.Bytes(), &resp)
	if err != nil {
		log.Println(err.Error())
	}

	log.Println(resp)

	err = json.Unmarshal(wSignIn.Body.Bytes(), &resp)
	if err != nil {
		log.Println(err.Error())
	}

	log.Println(resp)

	assert.Equal(t, 200, wSignIn.Code)
	assert.Equal(t, "Signed in successfully.", resp.Message)
}
