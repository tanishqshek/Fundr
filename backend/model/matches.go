package model

import (
	"time"
)

type Matches struct {
	MatchId    string `gorm:"primary_key"`
	CreatedAt  time.Time
	InvestorId string //`gorm:"ForeignKey:InvestorId"`
	FounderId  string //`gorm:"ForeignKey:FounderId"`
	PitchId    string
	// Creation_date time.Time
	// Creation_time time.Time
}

type Rejects struct {
	RejectId   string `gorm:"primary_key"`
	CreatedAt  time.Time
	InvestorId string //`gorm:"ForeignKey:InvestorId"`
	FounderId  string //`gorm:"ForeignKey:FounderId"`
	PitchId    string
	// Creation_date time.Time
	// Creation_time time.Time
}

type Archive struct {
	ArchiveId  string `gorm:"primary_key"`
	CreatedAt  time.Time
	InvestorId string //`gorm:"ForeignKey:InvestorId"`
	FounderId  string //`gorm:"ForeignKey:FounderId"`
	PitchId    string
	// Creation_date time.Time
	// Creation_time time.Time
}
