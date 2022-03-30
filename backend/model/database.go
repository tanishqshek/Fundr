package model

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type App struct {
	DB *gorm.DB
}

var DB *App

func DB_init() {

	DB = &App{}
	DB.Initialize("sqlite3", "database.db?_foreign_keys=on")

}

func (a *App) Initialize(dbDriver string, dbURI string) {
	db, err := gorm.Open(dbDriver, dbURI)
	if err != nil {
		panic("failed to connect database")
	}

	if res := db.Exec("PRAGMA foreign_keys = ON", nil); res.Error != nil {
		fmt.Println(res.Error)
	}
	a.DB = db

	// Migrate the schema.
	a.DB.AutoMigrate(
		&User{},
		// &Founder{},
		// &Investor{},
		&Pitch_master{},
		&Pitch_description{},
		&Matches{},
		&Rejects{},
		&Archive{},
		&User_description{},
		&Investor_likes{},
		&Founder_targets{},
		&Pitch_tags{},
	)
}
