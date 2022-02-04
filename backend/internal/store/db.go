package store

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type App struct {
	DB *gorm.DB
}

func DB_init() *App {

	DB := &App{}
	DB.Initialize("sqlite3", "test.db")
	return DB

}

func (a *App) Initialize(dbDriver string, dbURI string) {
	db, err := gorm.Open(dbDriver, dbURI)
	if err != nil {
		panic("failed to connect database")
	}
	a.DB = db

	// Migrate the schema.
	// a.DB.AutoMigrate(&Star{})
	a.DB.AutoMigrate(&User{})
}
