package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/calculate", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello Calc Go!")
	})

	fmt.Println("Servidor Go rodando na porta 33...")
	http.ListenAndServe(":33", nil)
}
