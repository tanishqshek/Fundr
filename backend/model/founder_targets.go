package model

import (
	"time"
)

type Founder_targets struct {
	Founder_id  string `gorm:"primary_key"`
	Investor_id string `gorm:"primary_key"`
	CreatedAt   time.Time
}
