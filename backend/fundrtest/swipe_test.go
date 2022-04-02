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

	var jsonData = []byte(`{
		"username": "dhairyashardul456@gmail.com",
		"password": "pass123"
	}`)

	http.NewRequest("POST", "/api/signin", bytes.NewBuffer(jsonData))

	jsonData = []byte(`{
		"action":"right",
		"target":"285da091-c54d-418c-a510-f75402251e2b",
		"pitch_id": "4c9eb48e-1895-4e60-b40a-8d7d435dc746"
	}`)

	resp := type_resp{}
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/api/auth/swipe", bytes.NewBuffer(jsonData))

	router := server.SetRouter()

	model.DB_init()
	router.ServeHTTP(w, req)

	err := json.Unmarshal(w.Body.Bytes(), &resp)
	if err != nil {
		log.Println(err.Error())
	}

	log.Println(resp)

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "Match Successful.", resp.Message)
}
