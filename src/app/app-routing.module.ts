import { ConcatMapMobileComponent } from './observable/concat-map-mobile/concat-map-mobile.component';
import { SwitchMapSearchComponent } from './observable/switch-map-search/switch-map-search.component';
import { CatchThrowComponent } from './observable/catch-throw/catch-throw.component';
import { ZipComponent } from './observable/zip/zip.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { CustomComponent } from './observable/custom/custom.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { AllComponent } from './observable/all/all.component';
import { PromiseComponent } from './promise/promise.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { ReplayComponent } from './observable/replay/replay.component';
import { MergeComponent } from './observable/merge/merge.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { D3jsComponent } from './observable/d3js/d3js.component';
import { ExternalLibComponent } from './observable/external-lib/external-lib.component';

const routes: Routes = [
  { path: '', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounce', component: DebounceComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replay', component: ReplayComponent },
      { path: 'async-sub', component: AsyncSubjectComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'merge-map', component: MergeMapComponent },
      { path: 'concat-map', component: ConcatMapComponent },
      { path: 'switch-map', component: SwitchMapComponent },
      { path: 'exhaust-map', component: ExhaustMapComponent },
      { path: 'share-replay', component: ShareReplayComponent },
      { path: 'combine-latest', component: CombineLatestComponent },
      { path: 'zip', component: ZipComponent },
      { path: 'catch-throw', component: CatchThrowComponent },
      { path: 'switch-map-search', component: SwitchMapSearchComponent },
      { path: 'concat-map-mobile', component: ConcatMapMobileComponent },
      { path: 'd3js', component: D3jsComponent },
      { path: 'ExternalLib', component: ExternalLibComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
