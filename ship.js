class Ship {
    constructor(user_ship_number, user_ship_char, user_ship_len) {
        this.shipNum = user_ship_number;
        this.shipChar = user_ship_char;
        this.shipLen = user_ship_len;
        this.shipOrientation = 0;
        this.rowStart = -1;
        this.colStart = -1;
    }

    getShipChar() {
        return shipChar;
    }

    getShipLen() {
        return shipLen;
    }

    updateCoordinates(orientation, coordinates) {
        shipOrientation = orientation;
        rowStart = coordinates[0];
        colStart = coordinates[1];
    }

    getShipOrientation() {
        return shipOrientation;
    }

    getRowStart() {
        return this.rowStart;
    }

    getColStart() {
        return this.colStart;
    }
}