# wetube

Cloning Youtube with Vanilla and NodeJS

## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [ ] Video Detail
- [x] Edit Video

## How to set MongoDB by using Docker

- Prerequisite: Install Docker in local

```bash
# Pull Official mongo docker Image in dockerhub
$ docker pull mongo

# Run Docker by using 27017 PORT & /data/db in local
$ docker run -d -p 27017:27017 -v ~/data:/data/db --name wetube-db mongo

# Check mongoDB is running in docker container
$ docker exec -it wetube-db bash
$ ps -ef | grep mongo

# Check mongoDB logs (in realtime, add -f option)
$ docker logs wetube-db
```
