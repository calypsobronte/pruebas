const generador_token = require("../../src/generador");

// prueba null

describe('Pruebas', function() {
    /* it ('verificar "": ', function() {
        let value = generador_token("", "", "")
        expect(value).not.toBe("");
    })
    it ('verificar null: ', function() {
        let value = generador_token("", null, "")
        expect(value).not.toBe(null);
    })
    it ('verificar ingreso texto: ', function() {
        let value = generador_token("hola", "bien", "tales")
        expect(value).not.toBe("holbien");
    }) */
    /* it ('Otro tipo de funcion para mirar null ', function() {
        expect(function() {
            generador_token(x1=null, x2=null, x3=null);
        }).toThrowError(Error);
    })

    it ('Otro tipo de funcion para mirar undefined ', function() {
        expect(function() {
            generador_token(x1=undefined, x2=undefined, x3=undefined);
        }).toThrowError(Error);
    })

    it ('Otro tipo de funcion para mirar entradas numericas ', function() {
        expect(function() {
            generador_token(x1=2, x2=4, x3=5);
        }).toThrowError(Error);
    })

    it ('verificar ingreso texto undefined : ', function() {
        let value = generador_token(x1=undefined, x1=undefined, x1=undefined)
        expect(value).toBeUndefined();
    }) */
    /* it ('Otro tipo de funcion para mirar entradas srting x1 =8 digitos, x2 = 8 digitos, x3 = 4 digitos ', function() {
        expect(function() {
            generador_token("holacomo","bienyvos","sisa");
        }).toContain("holayvossa");
    }) */

    it ('Realice una prueba donde x1 y x2 sean de 8 dígitos, pero x3 sea de 4 dígitos (y sean strings). ', function() {
        let value = generador_token("holacomo","bienyvos","sisa")
        expect(value).toContain("holayvossa");
    })

    it ('Realice una prueba donde x1, x2 y x3 tengan 8 dígitos (y sean strings). ', function() {
        let value = generador_token("holacomo","bienyvos","sisapapa")
        expect(value).toContain("holayvossapa");
    })

    it ('Realice una prueba donde se le introduzcan únicamente null al programa ', function() {
        expect(function() {
            generador_token(x1=null, x2=null, x3=null);
        }).toThrowError(Error);
    })

    it ('Realice una prueba donde se introduzcan únicamente undefined al programa.', function() {
        expect(function() {
            generador_token(x1=undefined, x2=undefined, x3=undefined);
        }).toThrowError(Error);
    })

    it ('Realice una prueba donde el programa reciba únicamente entradas numéricas. ', function() {
        expect(function() {
            generador_token(x1=2, x2=4, x3=5);
        }).toThrowError(Error);
    })

    /* it ('Otro tipo de funcion para mirar string', function() {
        let value = generador_token(x1.length="holacomo", x2.length="bienyvos", x3.length="sisa");
        expect(value).toBeString();
    }) */

    it ('Realice una prueba donde x1 y x2 sean de 8 dígitos, pero x3 sea de 4 dígitos (y sean strings).', function() {
        expect(function() {
            let value = generador_token(x1.length="holacomo", x2.length="bienyvos", x3.length="sisa");
            expect(value).toBeString();
        })
    })
})