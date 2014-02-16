# Adapters

Adapters are modules which are tightly integrated into the DozerJS core. The best
example is an adapter for the data source. The goal of adapters is that they are
interchangable. For example; the default `NeDB` adapter should use the same (or
very similar) methods to any other data source adapters that would be created.

By default DozerJS attempts to not explicitly define interactions with these
adapters as variation can be expected; for example between a NoSQL datasource and
a Relation Database adapter.

Adapters, despite still being separate from the core, are still called by the core
to integrate into controllers. So, for example, the `db.adapter` specified in the
configuration is applied to the `data` object intenal to the controller, exposing
the methods to the controller to allow for more automated integration.