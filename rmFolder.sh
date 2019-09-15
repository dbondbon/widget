#!/bin/bash

rmFolder() {
  folderName=$1
  len=${#folderName}
  if [ ${len} -ne 0 ]
  then
    if [ -d $1 ]
    then
      rm -rf $1
    else
      echo "Please enter the correct folder name!"
    fi
  else
    echo "Please enter the deleted folder name!"
  fi
}

rmFolder $1
