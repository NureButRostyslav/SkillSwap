package initializers

import (
	"fmt"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB // Глобальна змінна для збереження підключення

func ConnectToDatabase() {
	dsn := os.Getenv("DB_URL")
	var err error

	// Підключення до бази даних
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("Failed to connect to database:", err)
		return
	}

	fmt.Println("Database connection successful")
}
