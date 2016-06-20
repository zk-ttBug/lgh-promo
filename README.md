#vipme-oam  vipme 前端活动页面生成

###
scrat -v
rm -rf output*
#scrat release -Doumpd output
scrat release -Doumpd output
cd output
rm -f index.js package.json
tar zcvf output.tar.gz *
mv output.tar.gz ..
cd ..
###

##npm install scrat@v0.5.4 -g

## step 1
scrat release -cwL

## step 2
scrat server start