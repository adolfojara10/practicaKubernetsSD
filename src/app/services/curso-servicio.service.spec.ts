import { TestBed } from '@angular/core/testing';

import { CursoServicioService } from './curso-servicio.service';

describe('CursoServicioService', () => {
  let service: CursoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
