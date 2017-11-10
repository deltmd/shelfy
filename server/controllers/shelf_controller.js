module.exports = {
    getBins: (req, res) => {
        const datab = req.app.get('datab');
        datab.get_bins([req.params.id])
            .then((bins) => {
                if (bins[0]) {
                    res.status(200).send(bins)
                } else {
                    res.status(200).send(null)
                }
            })
            .catch(() => res.status(500).send());
    },
    getBin: (req, res) => {
        const datab = req.app.get('datab');
        const shelfid = req.params.id[0]
        const binid = req.params.id[1]
        datab.get_bin([shelfid, binid])
            .then((bin) => {
                if (bin[0]) {
                    res.status(200).send(bin)
                } else {
                    res.status(200).send(null)
                }
            })
            .catch(() => res.status(500).send());
    },
    updateBin: (req, res) => {
        //FRONT END-- this endpoint should only be accessible if bin object exists -
        const datab = req.app.get('datab');
        const shelfid = req.params.id[0]
        const binid = req.params.id[1]
        const { productName, price, imgurl } = req.body
        datab.update_bin([shelfid, binid, productName, price, imgurl])
            .then(() => {
                //get update bin obj to return
                datab.get_bin([shelfid, binid])
                    .then((bin) => res.status(200).send(bin))
            })
            .catch(() => res.status(500).send());
    },
    deleteBin: (req, res) => {
        const datab = req.app.get('datab');
        const shelfid = req.params.id[0]
        const binid = req.params.id[1]
        datab.delete_bin([shelfid, binid])
            .then(() => res.status(200).send(null))
            .catch(() => res.status(500).send());
    },
    createBin: (req, res) => {
        //FRONT END--this endpoint should only be accessible if no bin obj with these id parameters -- 
        const datab = req.app.get('datab');
        const shelfid = req.params.id[0]
        const binid = req.params.id[1]
        const { productName, price, imgurl } = req.body
        datab.create_bin([shelfid, binid, productName, price, imgurl])
            .then(() => res.status(200).send(null))
            .catch(() => res.status(500).send());
    }

};