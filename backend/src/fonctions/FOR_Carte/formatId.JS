const generateFormattedCardId = () => {
    const randomPart = () => {
        return Math.floor(1000 + Math.random() * 9000).toString(16);
    };

    // Générer chaque partie de l'identifiant de carte
    const part1 = randomPart();
    const part2 = randomPart();
    const part3 = randomPart();
    const part4 = randomPart();
    const part5 = randomPart();

    // Assembler les parties avec le format spécifique
    const cardId = `${part1}${part2}${part3}${part4}-${part5}`;

    // Renvoyer l'identifiant de carte généré
    return cardId;
};


module.exports = {
    generateFormattedCardId,
};