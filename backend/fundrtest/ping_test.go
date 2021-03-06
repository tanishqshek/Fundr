package fundrtest

import (
	"encoding/json"
	"log"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/tanishqshek/Fundr/backend/server"
)

type Ping struct {
	Message string `json:"message"`
}

func TestPingRoute(t *testing.T) {
	router := server.SetRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/ping", nil)
	router.ServeHTTP(w, req)

	resp := Ping{}
	err := json.Unmarshal(w.Body.Bytes(), &resp)
	if err != nil {
		log.Println(err.Error())
	}
	log.Println(resp)

	assert.Equal(t, 200, w.Code)
	assert.Equal(t, "pong", resp.Message)
}
