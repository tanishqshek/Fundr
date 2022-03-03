package model

import (
	"time"
)

type Investor_likes struct {
	Pitch_Id      string `gorm:"primaryKey"`
	Investor_id   string `gorm:"primaryKey"`
	Founder_id    string `gorm:"primaryKey"`
	Creation_date time.Time
	Creation_time time.Time
}
