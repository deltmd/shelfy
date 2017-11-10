module.exports = {
    getBins: (req, res) => {
        const db = req.app.get('db');
        console.log(`db: ${db}`)
        console.log(`req.params.id: ${req.params.id}`)
        db.get_bins([req.params.id])
            .then((bins) => res.status(200).send(bins))
            .catch(() => res.status(500).send());
    }, 
    
        testFn: (req,res)=>{
            const db = req.app.get('db');
            db.test().then((shelves)=>res.status(200).send(shelves))
    }
}