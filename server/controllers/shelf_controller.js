module.exports = {
    getBins: (req, res) => {
        const datab = req.app.get('datab');
        console.log(`datab: ${datab}`)
        console.log(`req.params.id: ${req.params.id}`)
        datab.get_bins([req.params.id])
            .then((bins) => res.status(200).send(bins))
            .catch(() => res.status(500).send());
    }, 
    
        testFn: (req,res)=>{
            const datab = req.app.get('datab');
            datab.test().then((shelves)=>res.status(200).send(shelves))
    }
}