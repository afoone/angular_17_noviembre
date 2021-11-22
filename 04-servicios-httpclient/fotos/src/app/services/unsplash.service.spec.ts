import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UnsplashService } from './unsplash.service';

describe('UnsplashService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(UnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("retrieves photos",
    () => {
      service.getFotos().subscribe(
        (fotos) => {
          console.log(fotos.total, fotos.total_pages)
          fotos.results.forEach(foto => {
            console.log(foto.description)
          });
          expect(fotos).toBeTruthy()
        }
      )
    }
  )
});
