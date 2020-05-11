package main

import "fmt"

type temp struct {
	celcius float32
}

func (r temp) convert() float32 {
	return 1.8*r.celcius + 32
}

func main() {
	r := temp{celcius: 50}
	fmt.Println("Fahrenheit: ", r.convert())
}
