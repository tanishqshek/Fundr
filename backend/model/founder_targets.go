package model

import (
	"time"
)

type Founder_targets struct {
	Id            uint
	Founder_id    string
	Investor_id   string
	Creation_date time.Time
	Creation_time time.Time
}
