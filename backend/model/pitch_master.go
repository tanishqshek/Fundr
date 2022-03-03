package model

import (
	"time"
)

type Pitch_master struct {
	Id            string `gorm:"primaryKey"`
	Username      string
	Creation_date time.Time
	Creation_time time.Time
	Deleted       bool
}
