package main

import "fmt"

func convertToF(celcius float32) float32 {
	return 1.8*celcius + 32
}

func main() {
	result := convertToF(100)
	fmt.Println("Fahrenheit: ", result)
}
