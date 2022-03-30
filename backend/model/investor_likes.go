package model

import (
	"time"
)

type Investor_likes struct {
	Pitch_Id      string `gorm:"primary_key"`
	Investor_id   string `gorm:"primary_key"`
	Founder_id    string `gorm:"primary_key"`
	Creation_date time.Time
	Creation_time time.Time
}
