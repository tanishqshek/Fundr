package model

import (
	"time"
)

type Pitch struct {
	Id            uint
	Username      string
	Creation_date time.Time
	Creation_time time.Time
	Deleted       bool
}
