package model

import (
	"time"
)

type Matches struct {
	Id            uint
	Investor_id   string
	Founder_id    string
	Pitch_id      string
	Creation_date time.Time
	Creation_time time.Time
}
