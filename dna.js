function DNAStrand(dna){
    let dnaStrand = dna.split("")
    let shouldBe = dnaStrand.map( e =>
        {
        switch (e) {
            case "A" : return "T"
            case "T" : return "A"
            case "G" : return "C"
            case "C" : return "G"
        }
        }
    )
        return shouldBe.join("")
  }