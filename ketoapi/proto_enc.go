package ketoapi

import (
	"github.com/ory/keto/internal/x"
	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	"github.com/pkg/errors"
)

type TupleData interface {
	GetSubject() *rts.Subject
	GetObject() string
	GetNamespace() string
	GetRelation() string
}

func (r *RelationTuple) FromDataProvider(d TupleData) (*RelationTuple, error) {
	switch s := d.GetSubject().GetRef().(type) {
	case nil:
		return nil, errors.WithStack(ErrNilSubject)
	case *rts.Subject_Set:
		r.SubjectSet = &SubjectSet{
			Namespace: s.Set.Namespace,
			Object:    s.Set.Object,
			Relation:  s.Set.Relation,
		}
	case *rts.Subject_Id:
		r.SubjectID = x.Ptr(s.Id)
	}

	r.Object = d.GetObject()
	r.Namespace = d.GetNamespace()
	r.Relation = d.GetRelation()

	return r, nil
}

func (r *RelationTuple) ToProto() *rts.RelationTuple {
	res := &rts.RelationTuple{
		Namespace: r.Namespace,
		Object:    r.Object,
		Relation:  r.Relation,
	}
	if r.SubjectID != nil {
		res.Subject = rts.NewSubjectID(*r.SubjectID)
	} else {
		res.Subject = rts.NewSubjectSet(r.SubjectSet.Namespace, r.SubjectSet.Object, r.SubjectSet.Relation)
	}
	return res
}

func (q *RelationQuery) FromDataProvider() *RelationQuery {
	return q
}
