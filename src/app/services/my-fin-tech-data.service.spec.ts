import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MyFinTechDataService } from './my-fin-tech-data.service';

describe('MyFinTechDataService', () => {
  let service: MyFinTechDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MyFinTechDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
