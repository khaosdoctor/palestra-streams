#!/bin/bash
echo "Hello \n World" > bigfile.txt

for i in {1..25}; do 
 cat bigfile.txt bigfile.txt > bigfile2.txt && mv bigfile2.txt bigfile.txt; 
done
