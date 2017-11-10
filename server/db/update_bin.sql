update bins 
set productname = $3, price = $4, imgurl = $5
where shelfid = $1 and id = $2