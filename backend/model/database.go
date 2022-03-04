package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type App struct {
	DB *gorm.DB
}

var DB *App

func DB_init() {

	DB = &App{}
	DB.Initialize("sqlite3", "database.db")

}

func (a *App) Initialize(dbDriver string, dbURI string) {
	db, err := gorm.Open(dbDriver, dbURI)
	if err != nil {
		panic("failed to connect database")
	}
	a.DB = db

	// Migrate the schema.
	a.DB.AutoMigrate(&User{},
		&Pitch_master{},
		&Pitch_description{},
		&Matches{},
		&User_description{},
		&Investor_likes{},
		&Founder_targets{})
}
