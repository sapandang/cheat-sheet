---
title: "MongoDb Snippets"
description: Some snippets for the MongoDb database
tags: mongodb

---


# MongoDb

## Start MongoDB
```bash
./mongod --dbpath data/db/
```

## import
```bash
./mongoimport -d geoData -c odi1 --type json  --file /home/username/Documents/workspace/javaProject/geoData/output.geojson 
```
## convert geoJson
```bash
jq --compact-output ".features[]" or1.geojson.1 > output.geojson
```
> Reference : https://stackoverflow.com/questions/22029114/how-to-import-geojson-file-to-mongodb

