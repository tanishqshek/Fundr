package server

import (
	_ "github.com/jinzhu/gorm/dialects/sqlite"

	"github.com/tanishqshek/Fundr/backend/model"
)

// type App struct {
// 	DB *gorm.DB
// }

func Start() {
	router := SetRouter()
	model.DB_init()
	// Start listening and serving requests
	router.Run(":8080")
}
