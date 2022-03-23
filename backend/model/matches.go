package model

import (
	"time"
)

type Matches struct {
	Id            string
	Investor      Investor //`gorm:"ForeignKey:InvestorId"`
	Founder       Founder  //`gorm:"ForeignKey:FounderId"`
	Pitch_id      string
	Creation_date time.Time
	Creation_time time.Time
}

type Rejects struct {
	Id            string
	Investor      Investor //`gorm:"ForeignKey:InvestorId"`
	Founder       Founder  //`gorm:"ForeignKey:FounderId"`
	Pitch_id      string
	Creation_date time.Time
	Creation_time time.Time
}

type Archive struct {
	Id            string
	Investor      Investor //`gorm:"ForeignKey:InvestorId"`
	Founder       Founder  //`gorm:"ForeignKey:FounderId"`
	Pitch_id      string
	Creation_date time.Time
	Creation_time time.Time
}
