package main

import (
	"fmt"

	"github.com/NureButRostyslav/SkillSwap/initializers"
)

func init(){
	initializers.LoadEnvVariables()
	initializers.ConnectToDatabase()
}

func main() {
	fmt.Println("Hello")
}