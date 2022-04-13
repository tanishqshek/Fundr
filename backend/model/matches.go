package model

import (
	"time"
)

type Matches struct {
	MatchId    string `gorm:"primary_key"`
	CreatedAt  time.Time
	InvestorId string
	FounderId  string
	PitchId    string
}

type Rejects struct {
	RejectId   string `gorm:"primary_key"`
	CreatedAt  time.Time
	InvestorId string
	FounderId  string
	PitchId    string
}

type Archive struct {
	ArchiveId  string `gorm:"primary_key"`
	CreatedAt  time.Time
	InvestorId string
	FounderId  string
	PitchId    string
}
