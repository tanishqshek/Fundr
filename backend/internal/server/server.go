package server

import (
	"github.com/tanishqshek/Fundr/backend/internal/store"

	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

// type App struct {
// 	DB *gorm.DB
// }
var DB *store.App

func Start() {
	router := setRouter()
	DB = store.DB_init()
	// Start listening and serving requests
	router.Run(":8080")
}
