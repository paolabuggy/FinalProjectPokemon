import { TestBed } from '@angular/core/testing';

import { EnvioCorreoService } from './envio-correo.service';

describe('EnvioCorreoService', () => {
  let service: EnvioCorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioCorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
