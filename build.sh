scrat -v
rm -rf output*
#scrat release -Doumpd output
scrat release -Doumpd output
cd output
rm -f index.js package.json
tar zcvf output.tar.gz *
mv output.tar.gz ..
cd ..