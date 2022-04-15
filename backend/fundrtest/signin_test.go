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

type type_body struct {
	Username string
	Password string
}

type type_resp struct {
	Message string `json:"message"`
}

func TestSignin(t *testing.T) {

	var jsonData = []byte(`{
		"Username": "sumeet2807b@gmail.com",
		"Password": "pass8"
	}`)

	resp := type_resp{}
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/api/signin", bytes.NewBuffer(jsonData))

	router := server.SetRouter()

	model.DB_init()
	router.ServeHTTP(w, req)

	err := json.Unmarshal(w.Body.Bytes(), &resp)
	if err != nil {
		log.Println(err.Error())
	}

	log.Println(resp)

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "Signed in successfully.", resp.Message)
}
