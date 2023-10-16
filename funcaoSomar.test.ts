import somar from './src/funcaoSomar';

describe('funcaoSomar', () => {
   it('Deve somar dois números', () => {
      const resultado = somar(1, 2);
      expect(resultado).toBe(3);
   });
   it('Deve somar dois números negativos', () => {
      const resultado = somar(-1, -3);
      expect(resultado).toBe(-4);
   });
   it('Deve falhar, pois a soma está errada', () => {
      const resultado = somar(1, 2);
      expect(resultado).not.toBe(4);
   });
});