package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"gorm.io/gorm"
)

//------------------------------------------
// Websocket
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func wshandler(writer http.ResponseWriter, res *http.Request) {

}

//------------------------------------------
// Database
type User struct {
	gorm.Model
	password string
}

type Board struct {
	gorm.Model
	User   string
	BitMap string
}

//------------------------------------------
type Login struct {
	User     string `form:"username" json:"username" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

// handle the form for login
func loginHandler(ctx *gin.Context) {
	var form Login
	if err := ctx.BindJSON(&form); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}
	// send the whiteboardlist from database

}

func registerHandler(ctx *gin.Context) {
	var form Login
	if err := ctx.BindJSON(&form); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "validated!"})
}

//------------------------------------------
func main() {
	router := gin.Default()

	// public api group for login system
	public := router.Group("/api")
	public.POST("/register", registerHandler)
	public.POST("/login", loginHandler)

	// private content
	private := router.Group("/")
	private.POST("usr/:id", func(ctx *gin.Context) {
		wshandler(ctx.Writer, ctx.Request)
	})

	router.Run()
}
