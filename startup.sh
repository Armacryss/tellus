#echo 'mongod --bind_ip=$IP --dbpath=/home/ubuntu/data/ --nojournal --rest "$@"' > mongod
./mongod
MONGO_URL='mongodb://0.0.0.0/local' meteor --port $IP:$PORT