FROM golang:1.23 AS builder
WORKDIR /app

# Copy over app
COPY . .

# Install dependencies
RUN go mod download

# Build the app
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/chatext .

# Make a new image
FROM scratch

# Copy the binary from the builder image
COPY --from=builder /go/bin/chatext .
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY home.html home.html

# Run the binary
ENTRYPOINT ["./chatext"]
