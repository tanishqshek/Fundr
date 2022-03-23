package model

import (
	"time"
)

type Founder_targets struct {
	Founder_id    string //`gorm:"primaryKey"`
	Investor_id   string //`gorm:"primaryKey"`
	Creation_date time.Time
	Creation_time time.Time
}
