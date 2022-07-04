import { TestBed } from '@angular/core/testing';

import { PagoServicioService } from './pago-servicio.service';

describe('PagoServicioService', () => {
  let service: PagoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
